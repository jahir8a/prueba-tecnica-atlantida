export interface Weather {
    region?:            string;
    current_conditions?: CurrentConditions;
    next_days?:         NextDay[];
    contact_author?:    ContactAuthor;
    data_source?:       string;
}

export interface ContactAuthor {
    email:     string;
    auth_note: string;
}

export interface CurrentConditions {
    dayhour:  string;
    temp:     Temp;
    precip:   string;
    humidity: string;
    wind:     Wind;
    iconURL:  string;
    comment:  string;
}

export interface Temp {
    c: number;
    f: number;
}

export interface Wind {
    km:   number;
    mile: number;
}

export interface NextDay {
    day:      string;
    comment:  string;
    max_temp: Temp;
    min_temp: Temp;
    iconURL:  string;
}
