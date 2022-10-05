export interface UserLogin {
    MaDonVi: string | null,
    TaiKhoan: string| null,
    MatKhau : string| null,
    HoVaTen: string
}

export interface OrgInfo{
    username: string| null,
    password: string
}

export interface UserReponse {
    access_token: any
    listRole: [],
    jwt : string,
    expiresIn: number,
    refreshToken : string,
    refreshTokenExpiryTime: string,
    errorCode: string,
    message: string,
    userId :string
}
