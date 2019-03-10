package com.mylonas.sta.schooldiary.schedule;

import java.time.LocalDate;
import java.util.Collection;

public class BellSchedule {
    private LocalDate effectiveFrom;
    private LocalDate effectiveTo;
    private Collection<BellsForLesson> bellsForLessons;
}
