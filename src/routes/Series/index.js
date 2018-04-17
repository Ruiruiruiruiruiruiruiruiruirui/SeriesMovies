import { connect } from 'react-redux'
import Pure from './Pure'
import { withRouter } from 'react-router-dom'
import { take } from 'lodash'

import { sorter } from 'utils/sort'

const state = state => ({
  series: take(state.main.shows.filter(show => show.programType === 'series' && parseInt(show.releaseYear) >= 2010), 21).sort(sorter)
})

const dispatch = dispatch => ({

})

export default withRouter(connect(state, dispatch)(Pure))