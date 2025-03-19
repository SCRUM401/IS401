namespace Scrum401.Data;

using Microsoft.EntityFrameworkCore;

public class YSAContext : DbContext
{
    public YSAContext(DbContextOptions<YSAContext> options) : base(options)
    {
    }

    // DbSet properties for each entity
    public DbSet<Event> Events { get; set; }
    public DbSet<EventType> EventTypes { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<RSVP> RSVPs { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Event - Requestor (One-to-Many)
        modelBuilder.Entity<Event>()
            .HasOne(e => e.Requestor)
            .WithMany(u => u.RequestedEvents)
            .HasForeignKey(e => e.RequestorID)
            .OnDelete(DeleteBehavior.Restrict); // Prevent cascading delete

        // Event - EventType (One-to-Many)
        modelBuilder.Entity<Event>()
            .HasOne(e => e.EventType)
            .WithMany(et => et.Events)
            .HasForeignKey(e => e.TypeID)
            .OnDelete(DeleteBehavior.Cascade);

        // RSVP - Event (Many-to-One)
        modelBuilder.Entity<RSVP>()
            .HasOne(r => r.Event)
            .WithMany(e => e.RSVPs)
            .HasForeignKey(r => r.EventID)
            .OnDelete(DeleteBehavior.Cascade);

        // RSVP - User (Many-to-One)
        modelBuilder.Entity<RSVP>()
            .HasOne(r => r.User)
            .WithMany(u => u.RSVPs)
            .HasForeignKey(r => r.UserID)
            .OnDelete(DeleteBehavior.Cascade);

        // Enum Conversions (for databases that don't support Enums natively)
        modelBuilder.Entity<Event>()
            .Property(e => e.EventStatus)
            .HasConversion<string>();

        modelBuilder.Entity<User>()
            .Property(u => u.Role)
            .HasConversion<string>();

        modelBuilder.Entity<RSVP>()
            .Property(r => r.RSVPStatus)
            .HasConversion<string>();
    }
}

