export interface Customer
{
    Id: number,
    PhoneNumber: string,
    Name: string,
    GroupId: number,
    GroupName: string,
    TrendId: number,
    ZaloId: string,
    FBId: string,
    totalRecord: number,
    totalPage: number

}

export interface lstCustomer
{
    currentPage: number,
    pageSize : number,
    totalRecord : number,
    totalPage: number
    data : Customer[]
}
