<template>
    <div class="flex">
        <div class="overflow-y-scroll h-screen">
            <ul class="menu p-2 bg-base-300 min-h-screen menu-compact">
                <li><NuxtLink to="/servers" class="mb-3">Back</NuxtLink></li>
                <li><DashBoardLink to="/">Overview</DashBoardLink></li>
                <li><DashBoardLink to="/starboards">Starboards</DashBoardLink></li>
                <li><DashBoardLink to="/overrides">Setting Overrides</DashBoardLink></li>
                <li><DashBoardLink to="/permroles">PermRoles</DashBoardLink></li>
                <li><DashBoardLink to="/award-roles">Award Roles</DashBoardLink></li>
                <li><DashBoardLink to="/autostar">Autostar Channels</DashBoardLink></li>
            </ul>
        </div>

        <div>
            <NuxtPage />
        </div>
    </div>
</template>
