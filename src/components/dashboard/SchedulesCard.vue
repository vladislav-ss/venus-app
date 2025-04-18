<template>
  <div class="schedules-card card flex flex-col h-full">
    <h1 class="mb-6">{{ formatDate(currentDate) }}</h1>

    <div class="schedules-list flex flex-col gap-6 mb-6 flex-1">
      <div
        v-for="schedule in todaySchedules"
        :key="schedule.id"
        class="schedule-item flex items-start gap-3"
      >
        <div class="schedule-marker w-[4px] h-[41px] rounded-full bg-primary"></div>
        <div class="flex-1">
          <p class="font-bold">{{ schedule.title }}</p>
          <p class="text-[12px] text-text-secondary">
            {{ formatTime(schedule.startTime) }} - {{ formatTime(schedule.endTime) }}
          </p>
        </div>
      </div>
    </div>

    <div class="mt-auto flex justify-end">
      <button class="text-primary text-base font-bold flex items-center gap-2 hover:opacity-80">
        View all
        <img
          src="@/assets/images/icons/arrow-right.svg"
          alt="Arrow right"
          class="w-[24px] h-[24px]"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { getSchedulesCurrentUser } from '@/api/schedulesApi';

interface Schedule {
  id: number;
  userId: number;
  title: string;
  startTime: string;
  endTime: string;
  date: string;
}

const currentDate = new Date();
const schedules = ref<Schedule[]>([]);

const todaySchedules = computed(() => {
  const today = currentDate.toISOString().split('T')[0];
  return schedules.value
    .filter((schedule) => schedule.date === today)
    .sort((a, b) => a.startTime.localeCompare(b.startTime))
    .slice(0, 3);
});

function formatDate(date: Date): string {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  return day + ' ' + month;
}

function formatTime(time: string): string {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const period = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  return formattedHour + ':' + minutes + ' ' + period;
}

getSchedulesCurrentUser()
  .then((response) => {
    schedules.value = response;
  })
  .catch((error) => {
    console.error('Error fetching schedules:', error);
  });
</script>

<style scoped></style>
