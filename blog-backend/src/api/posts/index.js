import Router from 'koa-router';
import * as postCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();

// post 전부 가져오기 
posts.get('/', postCtrl.list);
// 새 post 작성하기 
posts.post('/', checkLoggedIn, postCtrl.write);


const post_checked = new Router();
// 특정 post만 가져오기 
post_checked.get('/', postCtrl.read);
// 특정 post만 지우기
post_checked.delete('/', checkLoggedIn, postCtrl.checkOwnPost, postCtrl.remove);
// 특정 post 수정하기 
post_checked.patch('/', checkLoggedIn, postCtrl.checkOwnPost, postCtrl.update);

// param = id 검사 필요 
posts.use('/:id', postCtrl.getPostById, post_checked.routes());

export default posts;