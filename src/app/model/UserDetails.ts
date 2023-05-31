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
    authorities: [{
        authority:string;
    }];
    accountNonLocked: boolean;
}