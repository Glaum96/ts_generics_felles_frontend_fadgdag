type BrukerKonto = {
    eier: string
    beløp: number
}

const get_konto_felt = <T, K extends keyof T>(obj: T, felt: K) => {
    return obj[felt]
}

const konto: BrukerKonto = { eier: "Haakon", beløp: 420 }

const burde_bli_haakon = get_konto_felt(konto, "eier")
console.log(burde_bli_haakon)

const hmmmmm = get_konto_felt(konto, "ekstra_rettigheter")