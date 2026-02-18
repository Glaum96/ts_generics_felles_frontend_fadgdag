const filter_dum = (liste: any[], predikat: (b: any) => boolean): any[] => {
    return liste.filter(predikat);
}

type Person = {
    fornavn: string;
};

const brukere: Person[] = [];

filter_dum(brukere, b => b.etternavn === "Haakon");

const filterTyped = <T>(liste: T[], predikat: (b: T) => boolean): T[] => {
    return liste.filter(predikat);
}

filterTyped(brukere, b => b.etternavn === "Haakon");
