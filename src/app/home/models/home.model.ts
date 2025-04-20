export interface IExamInterface {
    exam_id: number,
    exam_name: string,
    heading: string,
}

export interface IActivity {
    exam_id: number,
    activity_id: number,
    activity_name: string,
    order: number,
}
