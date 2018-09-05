export const headerRoutes = [
    {
        name: "首页",
        path: "/home",
        child: [],
    }, {
        name: "赛事",
        path: "/game",
        child: [{
            name: "赛事预告",
            path: "/trailnotice",
            icon: "tablet",
            child: [{
                name: "全国",
                path: "/gameNational",
                child: [],
            }, {
                name: "地方",
                path: "/gamelocal",
                child: [],
            }, {
                name: "俱乐部",
                path: "/gameclub",
                icon: "table",
                child: [],
            }]
        }, {
            name: "赛事回顾",
            path: "/review",
            icon: "table",
            child: [{
                name: "全国",
                path: "/reviewNational",
                child: [],
            }, {
                name: "地方",
                path: "/reviewlocal",
                child: [],
            }, {
                name: "俱乐部",
                path: "/reviewclub",
                child: [],
            }]
        }, {
            name: "赛事查询",
            path: "/gameseatch",
            icon: "file-search",
            child: [],
        }
        ]
    }
]
