//12: modules
/**
 * Xử lý nghiệp vụ ra một file riêng thì gọi file riêng đó là module
 * import: nạp
 * export: xuất 
 */

import logger from './logger/index.js';//đón vào logger/index.js
import * as moduleType from './moduleType.js';
// logger('rồi vào import thực hiện sau', TYPE_Error)
console.log(moduleType)//đây là một bí danh của module, gọi là path Aliases