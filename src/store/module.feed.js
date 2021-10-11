import client from '@/commons/client.api'

import * as ACTIONS from '@/store/type.actions'
import * as MUTATIONS from '@/store/type.mutations'

const state = {
  events: {},
  comments: {}
}

const mutations = {
  [MUTATIONS.REPLACE_EVENT] (state, item) {
    state.events[item.id] = item
  },

  [MUTATIONS.REPLACE_COMMENT] (state, comment) {
    state.comments[comment.id] = comment
  }
}

const getters = {
  events ({ events }) {
    return Object.values(events)
      .sort((a, b) => a.timestamp.localeCompare(b.timestamp))
      .reverse()
  },

  comments: ({ comments }) => eventId => {
    return Object.values(comments)
      .filter(i => i.eventId === eventId)
      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
      .reverse()
  }
}

const actions = {
  async [ACTIONS.FEED_REACT] (ctx, item) {
    await client.reactions.react(item.id)
    item.likeCount++
    item.liked = true
    ctx.commit(MUTATIONS.REPLACE_EVENT, item)
  },

  async [ACTIONS.FEED_UNREACT] (ctx, item) {
    await client.reactions.unreact(item.id)
    item.likeCount--
    item.liked = false
    ctx.commit(MUTATIONS.REPLACE_EVENT, item)
  },

  async [ACTIONS.FEED_FETCH_EVENTS] (ctx) {
    const events = await client.feed.get()
    events.forEach(i => ctx.commit(MUTATIONS.REPLACE_EVENT, i))
  },

  async [ACTIONS.FEED_COMMENT] (ctx, { itemId, text }) {
    const comment = await client.comments.postComment(itemId, text)
    ctx.commit(MUTATIONS.REPLACE_COMMENT, comment)

    const item = Object.values(ctx.state.events).find(i => i.id === itemId)
    item.commentCount++
    ctx.commit(MUTATIONS.REPLACE_EVENT, item)
  },

  async [ACTIONS.FEED_FETCH_COMMENTS] (ctx, itemId) {
    const comments = await client.comments.byPostId(itemId, 100) // TODO: pagination
    comments.forEach(i => ctx.commit(MUTATIONS.REPLACE_COMMENT, i))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
