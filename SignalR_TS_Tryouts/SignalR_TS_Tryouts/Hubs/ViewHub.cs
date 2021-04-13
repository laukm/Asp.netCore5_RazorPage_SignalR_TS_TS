﻿using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace SignalR_TS_Tryouts.Hubs
{
    public class ViewHub : Hub
    {
        public static int ViewCount { get; set; } = 0;

        public async Task NotifyWatching()
        {
            ViewCount++;

            await this.Clients.All.SendAsync("viewCountUpdate", ViewCount);
        }
    }
}
