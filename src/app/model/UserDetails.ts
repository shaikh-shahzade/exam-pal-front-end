export class UserDetails
{
    id:Number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    enabled: boolean;
    profile: string;
    accountNonExpired: boolean;
    credentialsNonExpired: boolean;
    userRole: [{
        id:Number,
        role:{
            id:Number;
            role:string;
        }
    }];
    accountNonLocked: boolean;
}