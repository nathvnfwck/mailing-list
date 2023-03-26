export interface Presenter <I = any, O = any> {
  present: (data: I) => O
}
