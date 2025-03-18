import React from 'react';
import styles from './InputDesign.module.css';

interface Activity {
  id: string;
  date: string;
  title: string;
  time: string;
  location: string;
}

interface ActivityListProps {
  selectedDate: string;
  activities: Activity[];
}

const ActivityList: React.FC<ActivityListProps> = ({
  selectedDate,
  activities,
}) => {
  return (
    <div className={styles.activitiesSection}>
      <div className={styles.activitiesHeader}>
        <div className={styles.dateHeader}>
          <div className={styles.dateHeaderDivider} />
          <div className={styles.activitiesLabel}>Activities</div>
          <div className={styles.selectedDateDisplay}>{selectedDate}</div>
        </div>
        <div className={styles.activitiesList}>
          {activities.map((activity, index) => (
            <div key={index} className={styles.activityItem}>
              <div className={styles.activityDate} aria-hidden="true">
                {activity.date}
              </div>
              <div className={styles.activityDetails}>
                <div className={styles.activityTitle}>
                  {activity.title}
                  <span className={styles.titleNormal}>-{activity.time}</span>
                </div>
                <div className={styles.activityLocation}>
                  {activity.location}
                </div>
                <button className={styles.activityLink}>More Details...</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityList;
