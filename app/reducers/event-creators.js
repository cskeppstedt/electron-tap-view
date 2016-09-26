export const assertEvent = (assert) => (
  {
    type: 'assert',
    key: `assert_${assert.id}`,
    assert
  }
)

export const commentEvent = (comment, idCounter) => (
  {
    type: 'comment',
    key: makeCommentKey(comment, idCounter),
    comment
  }
)

export const planEvent = (plan) => (
  {
    type: 'plan',
    key: 'plan',
    plan
  }
)

function makeCommentKey (comment = '', idCounter) {
  return `comment_${idCounter}_${comment.replace(/[^a-z]/ig, '_')}`
}
