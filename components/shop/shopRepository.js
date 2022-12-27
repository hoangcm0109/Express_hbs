const db = require('../../db');
const {ITEM_PER_PAGE} = require("../../constant/index")

exports.countAllProducts = async () => {
    let count = await db.connection.execute(`select count(*) from product`);
    return count[0][0]['count(*)'];
}

exports.getAllProduct = async (page=1) => {
    // const result = await db.connection.execute('select * from Product');
    // return result[0];

    let count = await this.countAllProducts();
    const data = await db.connection.execute(`select * from product limit ${ITEM_PER_PAGE} offset ${(Number(page)-1)*ITEM_PER_PAGE}`);

    const result={
        data: data[0],
        page: page,
        total_page: Math.ceil(count/+ITEM_PER_PAGE),
        item_per_page: ITEM_PER_PAGE
    }
    return result;
}

exports.getProductByCategory = async (page, cate_Id) => {
    // const result = await db.connection.execute('select * from Product');
    // return result[0];

    let count = await db.connection.execute(`select count(*) from Product where category_Id = ?`, [cate_Id]);
    const data = await db.connection.execute(`select * from Product where category_Id = ? limit ${ITEM_PER_PAGE} offset ${(Number(page)-1)*ITEM_PER_PAGE}`, [cate_Id]);
    count= count[0][0]['count(*)']
    const result={
        data: data[0],
        page: page,
        total_page: Math.ceil(count/+ITEM_PER_PAGE),
        item_per_page: ITEM_PER_PAGE
    }

    return result;
}


exports.getAllCategory = async () => {
    
    const result = await db.connection.execute('select * from category');
    return result[0];
}

exports.getSortedProductByPrice_ASC = async (page,cate_Id,nameFilter) => {
    //let count = this.countAllProducts();
    //const result = await db.connection.execute('select * from Product order by price where category_Id=?',[cate_Id]);
    const data=[] ;
    let count=0;
    if(cate_Id!==0 && nameFilter===""){
        count = await db.connection.execute(`select count(*) from Product where category_Id=?`,[cate_Id]);
        data = await db.connection.execute(`select * from Product where category_Id=? limit ${ITEM_PER_PAGE} offset ${(page-1)*ITEM_PER_PAGE} order by price `,[cate_Id]);
    }
        
    else if (cate_Id===0 && nameFilter!==""){
        count = await db.connection.execute(`select count(*) FROM product WHERE name LIKE ?`, [`%${nameFilter}%`]);
        data = await db.connection.execute(`SELECT * FROM product WHERE name LIKE ? limit ${ITEM_PER_PAGE} offset ${(page-1)*ITEM_PER_PAGE} order by price`, [`%${nameFilter}%`]);
    }
    else 
        count = await db.connection.execute(`select count(*) FROM product WHERE name LIKE ? and category_Id=?`, [`%${nameFilter}%`], [cate_Id]);
        data = await db.connection.execute(`SELECT * FROM product WHERE name LIKE ? and category_Id=? limit ${ITEM_PER_PAGE} offset ${(page-1)*ITEM_PER_PAGE} order by price`, [`%${nameFilter}%`], [cate_Id]);
    
    const result={
        data: data[0],
        page: page,
        total_page: Math.ceil(count/+ITEM_PER_PAGE),
        item_per_page: ITEM_PER_PAGE
    }

    return result;
    
        //return result[0];
}

exports.getSortedProductByPrice_DESC = async (page,cate_Id,nameFilter) => {
    //const result = await db.connection.execute('select * from Product order by price DESC');

    const data=[] ;
    let count=0;
    if(cate_Id!==0 && nameFilter===""){
        count = await db.connection.execute(`select count(*) from Product where category_Id=?`,[cate_Id]);
        data = await db.connection.execute(`select * from Product where category_Id=? limit ${ITEM_PER_PAGE} offset ${(page-1)*ITEM_PER_PAGE} order by price DESC `,[cate_Id]);
    }
        
    else if (cate_Id===0 && nameFilter!==""){
        count = await db.connection.execute(`select count(*) FROM product WHERE name LIKE ?`, [`%${nameFilter}%`]);
        data = await db.connection.execute(`SELECT * FROM product WHERE name LIKE ? limit ${ITEM_PER_PAGE} offset ${(page-1)*ITEM_PER_PAGE} order by price DESC`, [`%${nameFilter}%`]);
    }
    else 
        count = await db.connection.execute(`select count(*) FROM product WHERE name LIKE ? and category_Id=?`, [`%${nameFilter}%`], [cate_Id]);
        data = await db.connection.execute(`SELECT * FROM product WHERE name LIKE ? and category_Id=? limit ${ITEM_PER_PAGE} offset ${(page-1)*ITEM_PER_PAGE} order by price DESC`, [`%${nameFilter}%`], [cate_Id]);
    
    const result={
        data: data[0],
        page: page,
        total_page: Math.ceil(count/+ITEM_PER_PAGE),
        item_per_page: ITEM_PER_PAGE
    }

    return result;
  
}

exports.getSortedProductByRate_Star_ASC = async (page,cate_Id,nameFilter) => {
    // const result = await db.connection.execute('select * from Product order by rate_star');
    // return result[0];

    const data=[] ;
    let count=0;
    if(cate_Id!==0 && nameFilter===""){
        count = await db.connection.execute(`select count(*) from Product where category_Id=?`,[cate_Id]);
        data = await db.connection.execute(`select * from Product where category_Id=? limit ${ITEM_PER_PAGE} offset ${(page-1)*ITEM_PER_PAGE} order by rate_star `,[cate_Id]);
    }
        
    else if (cate_Id===0 && nameFilter!==""){
        count = await db.connection.execute(`select count(*) FROM product WHERE name LIKE ?`, [`%${nameFilter}%`]);
        data = await db.connection.execute(`SELECT * FROM product WHERE name LIKE ? limit ${ITEM_PER_PAGE} offset ${(page-1)*ITEM_PER_PAGE} order by rate_star`, [`%${nameFilter}%`]);
    }
    else 
        count = await db.connection.execute(`select count(*) FROM product WHERE name LIKE ? and category_Id=?`, [`%${nameFilter}%`], [cate_Id]);
        data = await db.connection.execute(`SELECT * FROM product WHERE name LIKE ? and category_Id=? limit ${ITEM_PER_PAGE} offset ${(page-1)*ITEM_PER_PAGE} order by rate_star`, [`%${nameFilter}%`], [cate_Id]);
    
    const result={
        data: data[0],
        page: page,
        total_page: Math.ceil(count/+ITEM_PER_PAGE),
        item_per_page: ITEM_PER_PAGE
    }

    return result;
}

exports.getSortedProductByRate_Star_DESC = async (page,cate_Id,nameFilter) => {
    // const result = await db.connection.execute('select * from Product order by rate_star DESC');
    // return result[0];

    const data=[] ;
    let count=0;
    if(cate_Id!==0 && nameFilter===""){
        count = await db.connection.execute(`select count(*) from Product where category_Id=?`,[cate_Id]);
        data = await db.connection.execute(`select * from Product where category_Id=? limit ${ITEM_PER_PAGE} offset ${(page-1)*ITEM_PER_PAGE} order by rate_star DESC `,[cate_Id]);
    }
        
    else if (cate_Id===0 && nameFilter!==""){
        count = await db.connection.execute(`select count(*) FROM product WHERE name LIKE ?`, [`%${nameFilter}%`]);
        data = await db.connection.execute(`SELECT * FROM product WHERE name LIKE ? limit ${ITEM_PER_PAGE} offset ${(page-1)*ITEM_PER_PAGE} order by rate_star DESC`, [`%${nameFilter}%`]);
    }
    else 
        count = await db.connection.execute(`select count(*) FROM product WHERE name LIKE ? and category_Id=?`, [`%${nameFilter}%`], [cate_Id]);
        data = await db.connection.execute(`SELECT * FROM product WHERE name LIKE ? and category_Id=? limit ${ITEM_PER_PAGE} offset ${(page-1)*ITEM_PER_PAGE} order by rate_star DESC`, [`%${nameFilter}%`], [cate_Id]);
    
    const result={
        data: data[0],
        page: page,
        total_page: Math.ceil(count/+ITEM_PER_PAGE),
        item_per_page: ITEM_PER_PAGE
    }

    return result;
}

// exports.getProductByCategory = async (cate_Id) => {
//     const result = await db.connection.execute('select * from Product where category_Id = ?', [cate_Id]);
//     return result[0];
// }

exports.filter = async (page,nameFilter) => {
    let count = await db.connection.execute(`select count(*) FROM product WHERE name LIKE ?`, [`%${nameFilter}%`]);
    const data = await db.connection.execute(`SELECT * FROM product WHERE name LIKE ? limit ${ITEM_PER_PAGE} offset ${(page-1)*ITEM_PER_PAGE}`, [`%${nameFilter}%`]);
    count= count[0][0]['count(*)']
    const result={
        data: data[0],
        page: page,
        total_page: Math.ceil(count/+ITEM_PER_PAGE),
        item_per_page: ITEM_PER_PAGE
    }

    return result;
}

exports.getSortedProductByRelease_Date_Latest = async () => {
    const result = await db.connection.execute('select * from Product order by release_date');
    return result[0];
}