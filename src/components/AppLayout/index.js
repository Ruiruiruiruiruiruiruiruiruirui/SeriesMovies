import { connect } from 'react-redux'
import Pure from './Pure'
import { withRouter } from 'react-router-dom'

import { updateShowsListSaga } from 'models/main'

const state = state => ({

})

const dispatch = dispatch => ({
  updateShowsList: () => dispatch(updateShowsListSaga())
})

export default withRouter(connect(state, dispatch)(Pure))