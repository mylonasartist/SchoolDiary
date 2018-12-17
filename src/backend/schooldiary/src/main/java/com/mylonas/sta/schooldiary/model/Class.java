package com.mylonas.sta.schooldiary.model;

import java.util.Collection;

public class Class {
    private String id;
    // TODO implement logic - only single schedule can be effective for certain period of time.
    private Collection<WeekSchedule> schedules;
    private Collection<Lesson> lessons;
}
