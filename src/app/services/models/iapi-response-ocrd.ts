export interface IApiResponseOcrd {

    id:           number;
    CardCode:     string;
    CardName:     string;
    GroupCode:    string;
    Currency:     string;
    LicTradNum:   string;
    GroupNum:     string;
    Telef:        string;
    Email:        string;
    Active:       number;
    Balance:      number;
    created_at:   Date;
    updated_at:   Date;
    card_type_id: number;
   // cardtypes: CardType[];
}


/* interface CardType{

}
 */