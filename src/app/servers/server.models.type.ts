export interface UserResponse {
  login: string;
  bio: string;
  company: string;
  success: boolean;
  items: Array<{
    EmailMobile: string;
    Versión: string;
    id: number;
    status: string;
    date: string;
  }>
  alerts: {
    unitId: Array<string>
  }
}
