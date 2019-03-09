package com.mylonas.sta.schooldiary.school;

import com.mylonas.sta.schooldiary.schedule.Lesson;
import com.mylonas.sta.schooldiary.schedule.WeekSchedule;

import java.util.Collection;

public class Class {
    private String id;
    // TODO implement logic - only single schedule can be effective for certain period of time.
    private Collection<WeekSchedule> schedules;
    private Collection<Lesson> lessons;
}
