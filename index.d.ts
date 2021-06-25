export = Laftel

declare class Laftel {
  public static autoComplete (keyword: string): Promise<any>
  public static shop (): Promise<any>
  public static hotAnime (): Promise<any>
  public static dailyNew (): Promise<any>
  public static search (keyword: string): Promise<any>
  public static getItem (productID: string): Promise<any>
  public static getEpisode (productID: string): Promise<any>
}
