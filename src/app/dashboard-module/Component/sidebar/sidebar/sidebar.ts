export interface TypeRoute {
    name: string
    url?: string
    roles?: any
    children?: TypeRoute[]
}

export const ROUTE_DATA: TypeRoute[] = [
    {
        name: 'Hệ thống',
        roles: ["SuperAdmin", "Admin"],
        children: [
           
            {
                name: 'Tài khoản người dùng',
                url: 'taikhoan',
                // roles: ["Admin"],
            },
            {
                name: 'Đơn vị sử dụng',
                url: 'don-vi',
                // roles: ["Admin"],
            },
            {
                name: 'Cấu hình hệ thống',
                url: 'phuong-tien',
                // roles: ["Admin"],
            },
            {
                name: 'Cấu hình cơ sở dữ liệu',
                url: 'phuong-tien',
                // roles: ["Admin"],
            }
        ]
    },

    {
        name: 'Khai báo',
        roles: ["SuperAdmin", "Admin"],
        children: [

            {
                name: 'Khách hàng',
                url: 'khachhang',
                // roles: ["SuperAdmin", "Admin"],
            },
            {
                name: 'Nhóm khách hàng',
                url: 'nhomkhachhang',
                // roles: ["Admin"],
            },
            {
                name: 'Chân dung khách hàng',
                url: 'chandungkhachhang',
                // roles: ["Admin"],
            },
            {
                name: 'Hành vi khách hàng',
                url: 'hanhvikhachhang',
                // roles: ["Admin"],
            },
            {
                name: 'Nhóm chiến dịch',
                url: 'nhomchiendich',
                // roles: ["Admin"],
            },
            {
                name: 'Chỉ số kpi',
                url: 'chisokpi',
                // roles: ["Admin"],
            }
            ,
            {
                name: 'Xu hướng',
                url: 'xuhuong',
                // roles: ["Admin"],
            }
        ]
    },

    {
        name: 'Chăm sóc khách hàng',
        roles: ["SuperAdmin", "Admin"],
        children: [

            {
                name: 'Chiến dịch',
                url: 'chiendich',
                // roles: ["SuperAdmin", "Admin"],
            }
        ]
    },

    {
        name: 'Báo cáo, thống kê',
        roles: ["SuperAdmin", "Admin"],
        children: [

            {
                name: 'Báo cáo số 1',
                url: 'nhom-san-pham',
                // roles: ["SuperAdmin", "Admin"],
            },
            {
                name: 'Báo cáo số 2',
                url: 'san-pham',
                // roles: ["Admin"],
            },
            {
                name: 'Báo cáo số 3',
                url: 'khachhang',
                // roles: ["Admin"],
            },
            {
                name: 'Báo cáo số 4',
                url: 'don-vi',
                // roles: ["Admin"],
            },
            {
                name: 'Báo cáo số 5',
                url: 'phuong-tien',
                // roles: ["Admin"],
            }
        ]
    },

    {
        name: 'Trợ giúp',
        roles: ["SuperAdmin", "Admin"],
        children: [
            {
                name: 'Hỗ trợ từ xa',
                url: 'san-pham',
                // roles: ["Admin"],
            },
            {
                name: 'Giới thiệu',
                url: 'phuong-tien',
                // roles: ["Admin"],
            },
        ]
    }


]
