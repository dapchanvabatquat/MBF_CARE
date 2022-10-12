export interface Campaign {

    Id: number,
    GroupId: number,
    Name: string,
    Description: string,
    DayBegin: string,
    DayEnd: string,
    Act_SMS: boolean,
    Act_SMS_Content: string,
    Act_Zalo: boolean,
    Act_Zalo_Content: string,
    Act_FB: boolean,
    Act_FB_Content: string,
    Act_CallOut: boolean,
    Act_CallOut_Content: string,
    Act_AICallcenter: boolean,
    Act_AICallcenter_Content: string,
    K1: boolean,
    K2: boolean,
    K3: boolean,
    K4: boolean,
    K5: boolean,
    K6: boolean,
    K7: boolean,
    K8: boolean,
    K9: boolean,
    K10: boolean,
    K11: boolean,
    KeyWord: string,
    PageNumber: number,
    PageSize: number
}

export interface CampaignCustomers {
    CampaignId: number,
    CustomerId: number,
    Name: string,
    PhoneNumber: string,
    K1: boolean,
    K1Value: string,
    K2: boolean,
    K2Value: string,
    K3: boolean,
    K3Value: string,
    K4: boolean,
    K4Value: string,
    K5: boolean,
    K5Value: string,
    K6: boolean,
    K6Value: string,
    K7: boolean,
    K7Value: string,
    K8: boolean,
    K8Value: string,
    K9: boolean,
    K9Value: string,
    K10: boolean,
    K10Value: string,
    K11: boolean,
    K11Value: string,
    LastPush:string,
    LastPull:string,
    totalRecord: number,
    totalPage: number,
    PageNumber: number,
    PageSize: number
}

export interface CampaignGroup {
    Id: number;
    Name: string;
}

export interface CampaignStep {
    CampaignId: number;
    Step: number;
}
