const fn_any = (arg: any) => {
    return arg
}

const fn_union = (arg: number | string) => {
    return arg
}

const fn_fancy = <T>(arg: T) => {
    return arg
}


let a: any
let b: number | string
let c: number | string


a = fn_any(2)
b = fn_union(2)
c = fn_fancy(2)


const a_pluss_1 = a + 1

const b_pluss_1 = b + 1
const b_pluss_1_with_casting = (b as number) + 1
const b_pluss_1_with_manual_type_check = typeof b === "number" ? b + 1 : b + "_Haakon"

const c_pluss_1 = c + 1