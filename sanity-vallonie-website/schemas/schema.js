import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import product from './product'
import maleTopsProduct from './maleTopsProduct'
import maleBottomsProduct from './maleBottomsProduct'
import maleJacketsProduct from './maleJacketsProduct'
import femaleTopsProduct from './femaleTopsProduct'
import femaleBottomsProduct from './femaleBottomsProduct'
import femaleJacketsProduct from './femaleJacketsProduct'
import allWomenFragProduct from './allWomenFragProduct'
import allMenFragProduct from './allMenFragProduct'
import unisexFragProduct from './unisexFragProduct'
import bestSellersProduct from './bestSellersProduct'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    product, 
    maleTopsProduct, maleBottomsProduct, maleJacketsProduct,
    femaleTopsProduct, femaleBottomsProduct, femaleJacketsProduct,
    allWomenFragProduct, allMenFragProduct, unisexFragProduct,
    bestSellersProduct
  ]),
})
