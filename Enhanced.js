function arrToObj(arr) {
    return arr.reduce((acc,[key, value]) =>{//acc là biến lưu trữ, ban đầu acc chính bằng {}
               //còn [key, value] là giá trị hiện tại
       acc[key] = value; //quy định đối tượng acc ở phần tử thứ key có giá trị value
       return acc;//trả về curentValue là một đối tượng {} đã chưa key và value
    }, {})//{} giá trị khởi tạo thường là 1 đối tượng rỗng, mảng rỗng hoặc 0
 }
 
 
 
 const obj1 = arrToObj([
    ['name', 'Son Dang'], 
    ['age', 21], 
    ['address', 'Ha Noi']
 ])  
 console.log(obj1)

