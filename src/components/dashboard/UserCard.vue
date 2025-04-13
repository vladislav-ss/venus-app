<template>
  <div class="user-card card">
    <div class="flex flex-col items-center">
      <div class="avatar mb-3">
        <img
          :src="userAvatar"
          :alt="userName"
          class="w-[130px] h-[130px] rounded-full object-cover"
        />
      </div>
      <h3 class="text-[24px] font-bold text-text-primary mb-1 md:text-center">{{ userName }}</h3>
      <div class="location flex items-center gap-1 mb-6">
        <img src="@/assets/images/icons/location.svg" alt="Location" class="w-[10px] h-[14px]" />
        <span class="text-text-secondary text-sm">{{ location }}</span>
      </div>

      <div class="stats grid grid-cols-3 gap-8 w-full">
        <div class="stat flex flex-col items-center">
          <span class="text-[12px] text-text-secondary">Projects</span>
          <span class="text-[24px] font-bold text-text-primary">{{ stats.projects }}</span>
        </div>
        <div class="stat flex flex-col items-center">
          <span class="text-[12px] text-text-secondary">Followers</span>
          <span class="text-[24px] font-bold text-text-primary">{{ stats.followers }}</span>
        </div>
        <div class="stat flex flex-col items-center">
          <span class="text-[12px] text-text-secondary">Following</span>
          <span class="text-[24px] font-bold text-text-primary">{{ stats.following }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getCurrentUser } from '../../api/userApi';
import { getSocialMediaCurrentUser } from '../../api/socialMediaApi';

interface UserStats {
  projects: number;
  followers: number;
  following: number;
}

const userName = ref('Charles Robbie');
const location = ref('New York, USA');
const userAvatar = ref('/images/avatars/default.png');
const stats = ref<UserStats>({
  projects: 28,
  followers: 643,
  following: 76,
});

onMounted(async () => {
  try {
    const user = await getCurrentUser();
    if (user) {
      userName.value = `${user.firstName} ${user.lastName}`;
      location.value = user.location;
      userAvatar.value = user.profilePicture;

      // Fetch user social media stats
      const socialMedia = await getSocialMediaCurrentUser();
      if (socialMedia.length > 0) {
        const userStats = socialMedia[0];
        stats.value = {
          projects: userStats.projects,
          followers: userStats.followers,
          following: userStats.following,
        };
      }
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
});
</script>

<style scoped></style>
