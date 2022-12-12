function Loading() {
    return (
        <>
            <div className="is-flex is-justify-content-center is-align-items-center" style={{position: "absolute", top: "0", bottom: "0", left: "0", right: "0"}}>
                <div className="loader is-loading" style={{width: "50vw", height: "50vw"}}></div>
            </div>
        </>
    )
}

export default Loading;