const shopRepository = require('./shopRepository');

exports.countAllProducts = async () => {
    return shopRepository.countAllProducts();
}

exports.getAllProduct = async (page=1) => {
  return shopRepository.getAllProduct(page);
}

exports.getProductByCategory = async (page=1, cate_Id) => {
    return shopRepository.getProductByCategory(page,cate_Id)
}

exports.getAllCategory = async () => {
    return shopRepository.getAllCategory();
}

exports.getSortedProductByPrice_ASC = async (page,cate_Id,nameFilter) => {
    return shopRepository.getSortedProductByPrice_ASC(page,cate_Id,nameFilter)
}

exports.getSortedProductByPrice_DESC = async (page,cate_Id,nameFilter) => {
    return shopRepository.getSortedProductByPrice_DESC(page,cate_Id,nameFilter)
}

exports.getSortedProductByRate_Star_ASC = async (page,cate_Id,nameFilter) => {
    return shopRepository.getSortedProductByRate_Star_ASC(page,cate_Id,nameFilter)
}

exports.getSortedProductByRate_Star_DESC = async (page,cate_Id,nameFilter) => {
    return shopRepository.getSortedProductByRate_Star_DESC(page,cate_Id,nameFilter)
}

exports.filter = async (page,nameFilter) => {
    return shopRepository.filter(page,nameFilter)
}

exports.getSortedProductByRelease_Date_Latest = () => {
    return shopRepository.getSortedProductByRelease_Date_Latest();
}