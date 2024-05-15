function usestate(data){
    let set=data
    function setter(newr){
        set=newr
    }
    return [set,setter]
}
export default usestate