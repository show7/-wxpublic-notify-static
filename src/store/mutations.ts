import TYPES from './types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<any> = {
  [TYPES.SET_ACTIVITIES](state, activities): void {
    state.activities = activities
  },
}
export default mutations
