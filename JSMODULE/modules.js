//12: modules
/**
 * Xử lý nghiệp vụ ra một file riêng thì gọi file riêng đó là module
 * import: nạp
 * export: xuất 
 * Từ file nào mà muốn sử dụng thành phần của file kia thì file này phải nạp thành phần của file kia vào,
 * và file kia phải ném ra thành phần đó
 */

import {logger2} from './logger/index.js';//đón vào logger/index.js
// console.log(logger)
import * as moduleType from './moduleType.js';
logger2('rồi vào import thực hiện sau', moduleType.TYPE_Log)
console.log(moduleType)//đây là một bí danh của module, gọi là path Aliases