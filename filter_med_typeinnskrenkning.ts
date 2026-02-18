type Konto = {
    eier: string
    beløp: number
}

type AdminKonto = Konto & {
    ekstra_rettigheter: string[]
}

type Depositumskonto = Konto & {
    ekstern_eier: string
}

const filtrer_konto = (kontoer: Konto[], predikat: (konto: Konto) => boolean) => { // Hvorfor Konto?
    return kontoer.filter(predikat)
}

const admin_kontoer: AdminKonto[] = []
const admin_kontoer_med_mer_enn_100_kroner = filtrer_konto(admin_kontoer, konto => konto.beløp > 100) // Feil type :'(


const filtrer_konto_fancy = <T extends Konto>(kontoer: T[], predikat: (konto: T) => boolean): T[] => {
    return kontoer.filter(predikat)
}

filtrer_konto_fancy([1, 2, 3], konto => konto.beløp > 100) // Fortsatt innskrenkning

const admin_kontoer_ny: AdminKonto[] = []
const admin_kontoer_med_mer_enn_100_kroner_ny = filtrer_konto_fancy(admin_kontoer_ny, konto => konto.beløp > 100) // Nå fortsatt AdminKonto. Yay!


