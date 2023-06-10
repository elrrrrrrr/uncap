import React from 'react';
import { useLocation } from "umi";

// 由于 umi 使用的 react-router v6 对保留字符处理有问题
// 所以我们需要使用 useLocation 来拼接参数
// 类似 unpkg 的路径，我们需要实现以下规则
// 1. @scopes/name => 版本列表页
// 2. @scopes/name@spec => 文件详情页，默认跳转至 package.json
// 3. @scopes/name@spec/:file => 文件详情页
// 我们通过一个 Context 进行包裹，便于子路由都能识别这个路径
export default function useInfo() {
  const { pathname } = useLocation();
  const nameRes = React.useMemo(() => {
    let scope = '';
    let name = '';
    let fullname = '';
    let spec = '';
    let path = 'package.json';
    let version = '';

    // 以 /@types/node
    if (pathname.startsWith('/@')) {
      scope = pathname.split('/')[1];
    }
    // 以 react 为例
    const nameOrSpec = pathname.slice(scope.length).split('/')[1];
    if (nameOrSpec.includes('@')) {
      name = nameOrSpec.split('@')[0];
      spec = decodeURIComponent(nameOrSpec.split('@')[1]);
    } else {
      name = nameOrSpec;
      spec = 'latest';
    }

    fullname = scope ? `${scope}/${name}` : name;
    path = pathname.split('/').slice(3).join('/') || path;

    return {
      scope,
      name,
      fullname,
      spec,
      path,
    };
  }, [pathname]);

  return nameRes;
}
