// ErrorBoundary.js
// 출처 및 참고 : React - 에러 경계, zerocho - 에러 바운더리
// 링크 1 : https://ko.reactjs.org/docs/error-boundaries.html
// 링크 2 : https://www.zerocho.com/category/React/post/60cebadecc6ccc0004c38295

import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
        // logErrorToMyService(error, errorInfo);
        console.error('Uncaught error:', error, errorInfo);
    }

    render() {
        const {hasError} = this.state;
        if (hasError) {
            // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
            return <h1>Something went wrong.</h1>;
        }
        const {children} = this.props;
        return children;
    }
}
export default ErrorBoundary;