package com.mylonas.sta.schooldiary.model;

import java.time.LocalDate;

public class WeekSchedule {
    private LocalDate effectiveFrom;
    private LocalDate effectiveTo;
    private DaySchedule[] daySchedules = new DaySchedule[7];
}
