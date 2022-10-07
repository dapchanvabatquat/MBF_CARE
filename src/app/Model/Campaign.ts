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

export interface CampaignGroup {
    Id: number;
    Name: string;
  }