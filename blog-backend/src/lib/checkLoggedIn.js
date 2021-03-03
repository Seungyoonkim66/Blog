const checkLoggedIn = (ctx, next) => {
    if (!ctx.state.user) {
        ctx.status = 401;
        return;
    }
    return next();
}

export default checkLoggedIn;


// 로그인 상태가 아니라면 401 http status를 반환하고, 그렇지 않으면 그 다음 미들웨어 실행 