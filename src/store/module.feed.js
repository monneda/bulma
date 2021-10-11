import client from '@/commons/client.api'

import * as MUTATIONS from '@/store/type.mutations'
import * as ACTIONS from '@/store/type.actions'

const state = {
  items: {},
  comments: {}
}

const mutations = {
  [MUTATIONS.REPLACE_ITEM] (state, item) {
    state.items[item.id] = item
  },

  [MUTATIONS.REPLACE_COMMENT] (state, comment) {
    state.comments[comment.id] = comment
  }
}

const actions = {
  async [ACTIONS.FEED_REACT] (ctx, item) {
    await client.reactions.react(item.id)
    item.likeCount++
    item.liked = true
    ctx.commit(MUTATIONS.REPLACE_ITEM, item)
  },

  async [ACTIONS.FEED_UNREACT] (ctx, item) {
    await client.reactions.unreact(item.id)
    item.likeCount--
    item.liked = false
    ctx.commit(MUTATIONS.REPLACE_ITEM, item)
  },

  async [ACTIONS.FEED_FETCH] (ctx) {
    const items = await client.feed.get()
    items.forEach(i => ctx.commit(MUTATIONS.REPLACE_ITEM, i))
  },

  async [ACTIONS.FEED_COMMENT] (ctx, { id, text }) {
    const comment = await client.comments.postComment(id, text)
    ctx.commit(MUTATIONS.REPLACE_COMMENT, comment)
  },

  async [ACTIONS.COMMENTS_FETCH] (ctx, id) {
    const comments = await client.comments.byPostId(id)
    comments.forEach(i => ctx.commit(MUTATIONS.REPLACE_COMMENT, i))
  }
}

export default {
  state,
  actions,
  mutations
}
