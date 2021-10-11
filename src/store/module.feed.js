import client from '@/commons/client.api'

import * as ACTIONS from '@/store/type.actions'
import * as MUTATIONS from '@/store/type.mutations'

const state = {
  events: {}
}

const mutations = {
  [MUTATIONS.FEED_EVENT_REPLACE] (state, item) {
    item.comments = item.comments || {}
    state.events[item.id] = item
  },

  [MUTATIONS.FEED_EVENT_REMOVE] (state, item) {
    delete state.events[item.id]
  },

  [MUTATIONS.FEED_COMMENT_REPLACE] (state, item) {
    const event = state.events[item.eventId]

    if (!(item.id in event.comments)) {
      event.commentCount++
    }

    event.comments[item.id] = item
    state.events[item.eventId] = event
  },

  [MUTATIONS.FEED_COMMENT_REMOVE] (state, item) {
    const event = state.events[item.eventId]

    if (item.id in event.comments) {
      event.commentCount--
    }

    delete event.comments[item.id]
    state.events[item.eventId] = event
  }
}

const actions = {
  async [ACTIONS.FEED_FETCH_EVENTS] (ctx) {
    const events = await client.feed.fetchEvents(20)
    events.forEach(i => ctx.commit(MUTATIONS.FEED_EVENT_REPLACE, i))
  },

  async [ACTIONS.FEED_EVENT_REACT] (ctx, item) {
    await client.feed.reactEvent(item.id)
    item.likeCount++
    item.like = true
    ctx.commit(MUTATIONS.FEED_EVENT_REPLACE, item)
  },

  async [ACTIONS.FEED_EVENT_UNREACT] (ctx, item) {
    await client.feed.unreactEvent(item.id)
    item.likeCount--
    item.like = false
    ctx.commit(MUTATIONS.FEED_EVENT_REPLACE, item)
  },

  async [ACTIONS.FEED_EVENT_DELETE] (ctx, item) {
    await client.feed.deleteEvent(item.id)
    ctx.commit(MUTATIONS.FEED_EVENT_REMOVE, item)
  },

  async [ACTIONS.FEED_EVENT_CREATE] (ctx, item) {
    const event = await client.feed.createEvent(item)
    ctx.commit(MUTATIONS.FEED_EVENT_REPLACE, event)
  },

  async [ACTIONS.FEED_FETCH_COMMENTS] (ctx, id) {
    const comments = await client.feed.fetchComments(id, 100) // TODO: pagination
    comments.forEach(i => ctx.commit(MUTATIONS.FEED_COMMENT_REPLACE, i))
  },

  async [ACTIONS.FEED_COMMENT_CREATE] (ctx, { id, item }) {
    const comment = await client.feed.createComment(id, item)
    ctx.commit(MUTATIONS.FEED_COMMENT_REPLACE, comment)
  },

  async [ACTIONS.FEED_COMMENT_DELETE] (ctx, item) {
    await client.feed.deleteComment(item.eventId, item.id)
    ctx.commit(MUTATIONS.FEED_COMMENT_REMOVE, item)
  }
}

export default {
  state,
  actions,
  mutations
}
