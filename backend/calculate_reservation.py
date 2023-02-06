
def reserved_time(task_list):
    """
    タスクリストから計算
    """

    prev_date = ''
    start_date_time_list = []
    end_date_time_list = []
    res_list = []

    for idx, task in enumerate(task_list):

        # 日付が変わる or forが最後まで回ったら集計して再度初期化
        if (prev_date != task.start_date_time.date() and idx != 0) or idx == len(task_list) - 1:
            
            sorted(start_date_time_list)
            sorted(end_date_time_list)

            start_time = start_date_time_list[-1]
            end_time = end_date_time_list[0]

            if end_time > start_time:
                res_list.append({"start_date_time": start_time, "end_date_time": end_time})

            start_date_time_list = []
            end_date_time_list = []
        
        start_date_time_list.append(task.start_date_time)
        end_date_time_list.append(task.end_date_time)

        prev_date = task.start_date_time.date()

    # もし予定が合わなければ，None
    if res_list == []:
        res_list.append({"start_date_time": None, "end_date_time": None})

    return res_list