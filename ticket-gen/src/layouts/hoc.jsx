function Parent(props) {

    // perform authentication check


    if (!isAuthenticated) return <p>Access Denied</p>;

    return (
        <div>
            <h1>Parent Component</h1>
            <Child/>

            {props.children}
        </div>
    )
}


function Child() {
    return (
        <div>
            <h2>Child Component</h2>
        </div>
    )
}

function SomeComponent() {
    return (
        <Parent>
            <h2>Some Component</h2>
            <h2>Some Component</h2>
            <h2>Some Component</h2>
            <h2>Some Component</h2>
            <h2>Some Component</h2>
            <h2>Some Component</h2>
            <h2>Some Component</h2>
            <h2>Some Component</h2>
            <h2>Some Component</h2>
            <h2>Some Component</h2>
            <h2>Some Component</h2>
            <h2>Some Component</h2>
        </Parent>
    )
}


function AuthenticationWrapper() {
    // do all the logic of ensuring authentication

    if (!isAuthenticated) return <p>Access Denied</p>;

    return (
        <div>
            <h1>Authenticated</h1>
            {props.children}
        </div>
    )
}