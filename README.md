# ShinBook

리액트, 인터파크 도서 api 를 사용해서 미니 도서웹 제작

## 설명

1. Screen

- Routes (Home, New, Recommend, Search, Detail) 부분으로 나누기

        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/recommend" component={Recommend} />
                <Route path="/new" component={New} />
                <Route path="/search" component={Search} />
                <Route paht="/book/:id" component={Detail} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>

- Component-Presenter 패턴 사용

1.  Api

        const api = axios.create({
            baseURL: "api/",
            params: {
                key: process.env.REACT_APP_API_KEY,
                output: 'json'
            }
        })

- axios
- 인터파크 도서 api

1. Style

- styled-components
- style 추가시 기본 react style 사용
- GlobalStyles 추가
