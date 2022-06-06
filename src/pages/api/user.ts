export interface User{
  map(arg0: (user: any) => JSX.Element): import("react").ReactNode;
  id: number,
  name:string,
  username:string;
}
