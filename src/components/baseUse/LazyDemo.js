import React from "react";
// import ContextDemo from'./ContextDemo'
//异步组件组件的使用
const ContextDemo = React.lazy(() => import('../useContext/ContextDemo2'))

// class LazyDemo extends React.Component{
//     constructor(props){
//         super(props)
//     }

//     render(){
//         return(
//             <div>
//                 <p>引入一个动态组件</p>
//                 <hr />
//                 <React.Suspense fallback={<div>loading...</div>}>
//                     <ContextDemo/>
//                 </React.Suspense>
//             </div>
//         )
//     }
// }
const LazyDemo = () => {
    return (
        <div>
            <p>引入一个动态组件</p>
            <hr />
            <React.Suspense fallback={<div>loading...</div>}>
                <ContextDemo />
            </React.Suspense>
        </div>
    )
}
export default LazyDemo