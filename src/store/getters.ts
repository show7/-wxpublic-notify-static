import { GetterTree } from 'vuex'

const getters: GetterTree<any, any> = {
  load(state): boolean {
    const { modules, headline, superSales, shops } = state
    return !!(modules.length && headline.length && superSales.length && shops.length)
  }
}

export default getters
