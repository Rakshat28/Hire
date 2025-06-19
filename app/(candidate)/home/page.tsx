'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { Calendar, Video, Users, Clock, MapPin, User, Eye } from 'lucide-react'; // Import necessary icons


interface ScheduledMeeting {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  interviewer: string;
  role: string;
  company: string;
  meetingLink: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

const Homepage: React.FC = () => {
  const [meetingCode, setMeetingCode] = useState('');
  const [isJoining, setIsJoining] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'join' | 'scheduled'>('join'); // State for tab navigation

  // Mock scheduled meetings data
  const [scheduledMeetings] = useState<ScheduledMeeting[]>([
    {
      id: '1',
      title: 'Technical Interview - Frontend Developer',
      date: '2025-06-25',
      time: '14:00',
      duration: '60 mins',
      interviewer: 'Sarah Johnson',
      role: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      meetingLink: 'https://meet.google.com/abc-defg-hij',
      status: 'upcoming'
    },
    {
      id: '2',
      title: 'System Design Interview',
      date: '2025-06-27',
      time: '10:30',
      duration: '90 mins',
      interviewer: 'Michael Chen',
      role: 'Full Stack Engineer',
      company: 'InnovateTech',
      meetingLink: 'https://zoom.us/j/123456789',
      status: 'upcoming'
    },
    {
      id: '3',
      title: 'HR Round - Final Interview',
      date: '2025-06-20',
      time: '16:00',
      duration: '45 mins',
      interviewer: 'Jessica Williams',
      role: 'Software Engineer',
      company: 'StartupXYZ',
      meetingLink: 'https://teams.microsoft.com/l/meetup-join/sample',
      status: 'completed'
    },
    {
      id: '4',
      title: 'Initial Screening Call',
      date: '2025-06-18', // Past date
      time: '11:00',
      duration: '30 mins',
      interviewer: 'David Lee',
      role: 'Junior Developer',
      company: 'GrowthHub Inc.',
      meetingLink: 'https://meet.google.com/xyz-1234-abc',
      status: 'completed'
    }
  ]);

  const handleJoinMeeting = async () => {
    if (!meetingCode.trim()) {
      setError('Please enter a meeting code or link');
      return;
    }

    const isValidLink = (url: string) => {
      try {
        new URL(url);
        return true;
      } catch (error) {
        return false;
      }
    };

    let targetLink = meetingCode.trim();

    if (!isValidLink(targetLink)) {
      targetLink = `https://meet.google.com/${meetingCode.trim().toLowerCase().replace(/[^a-z0-9-]/g, '')}`;
    }

    if (!isValidLink(targetLink)) {
        setError('Please enter a valid meeting code or link');
        return;
    }

    setError('');
    setIsJoining(true);

    setTimeout(() => {
      window.open(targetLink, '_blank');
      setIsJoining(false);
    }, 1500);
  };

  const handleJoinScheduledMeeting = (meetingLink: string) => {
    window.open(meetingLink, '_blank');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
       weekday: 'long',
       year: 'numeric',
       month: 'long',
       day: 'numeric'
     });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const upcomingMeetings = scheduledMeetings.filter(meeting => {
    const meetingDate = new Date(meeting.date);
    const today = new Date();
    // Compare dates only (ignore time)
    return meeting.status === 'upcoming' && meetingDate >= new Date(today.getFullYear(), today.getMonth(), today.getDate());
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastMeetings = scheduledMeetings.filter(meeting => {
    const meetingDate = new Date(meeting.date);
    const today = new Date();
    // Compare dates only (ignore time)
    return meeting.status !== 'upcoming' || meetingDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort past meetings by most recent first


  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4">
      {/* Header and Tab Navigation (moved to container level for better control) */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-8"> {/* Adjusted padding-top */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
          <div className="flex">
            <button
              onClick={() => setActiveTab('join')}
              className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'join'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Join Interview
            </button>
            <button
              onClick={() => setActiveTab('scheduled')}
              className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'scheduled'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Scheduled Interviews ({upcomingMeetings.length})
            </button>
          </div>
          {/* UserButton on the right */}
          <div className="flex items-center">
            <UserButton />
          </div>
        </div>
      </div>

      {/* Main Content Area (Conditional based on activeTab) */}
      <div className="w-full max-w-7xl mx-auto px-4 py-8"> {/* This div now exclusively holds the content of the active tab */}
          {activeTab === 'join' ? (
            /* Join Interview Tab Content */
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16">
              {/* Left Section: Main Join Form */}
              <div className="flex-1 max-w-xl text-center lg:text-left">
                <h1 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                  Stay Calm, Do your Best <br /> Join with HireMeet
                </h1>
                <p className="text-xl text-gray-700 mb-10">
                  Connect, collaborate and celebrate from anywhere with HireMeet
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">

                  {/* Join Code/Link Input */}
                  <div className="relative flex-1 w-full sm:w-auto">
                    <input
                      type="text"
                      value={meetingCode}
                      onChange={(e) => {
                        setMeetingCode(e.target.value);
                        setError('');
                      }}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors ${
                        error ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter a code or link"
                    />
                    <button
                      onClick={handleJoinMeeting}
                      disabled={isJoining}
                      className={`absolute right-0 top-0 h-full px-5 text-gray-600 font-medium rounded-r-lg transition-colors ${
                        meetingCode.trim() ? 'hover:bg-gray-100' : 'cursor-not-allowed text-gray-400'
                      }`}
                    >
                      {isJoining ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-600 border-t-transparent"></div>
                      ) : (
                        'Join'
                      )}
                    </button>
                  </div>
                </div>
                {error && (
                  <p className="mt-2 text-sm text-red-600 text-left sm:ml-[150px]">{error}</p>
                )}
                <a href="#" className="block mt-8 text-blue-600 hover:underline text-sm">
                  Learn more about HireMeet
                </a>
              </div>

              {/* Right Section: Image */}
              <div className="flex-1 hidden lg:flex flex-col items-center justify-center max-w-md">
                <Image
                  src="/image1.png"
                  alt="Calendar illustration"
                  width={400}
                  height={300}
                  priority
                  className="object-contain mb-8 rounded-full"
                />
              </div>
            </div>
          ) : (
            /* Scheduled Meetings Tab Content */
            <div className="space-y-12"> {/* Removed py-4 here, as it's now on the parent .container */}
              {/* Upcoming Meetings */}
              {upcomingMeetings.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Clock className="h-6 w-6 text-blue-600" />
                    Upcoming Interviews
                  </h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {upcomingMeetings.map((meeting) => (
                      <div key={meeting.id} className="bg-white rounded-lg shadow-md border border-gray-100 p-6 flex flex-col justify-between hover:shadow-lg transition-shadow relative"> {/* Added relative for absolute positioning of status */}
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{meeting.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{formatDate(meeting.date)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{meeting.time} ({meeting.duration})</span>
                            </div>
                          </div>
                          <div className="space-y-2 mb-4 text-sm text-gray-700">
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-gray-500" />
                              <span>Interviewer: {meeting.interviewer}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-gray-500" />
                              <span>Company: {meeting.company}</span>
                            </div>
                            <div>
                              <span className="font-medium">Role:</span> {meeting.role}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-3 mt-4">
                          <button
                            onClick={() => handleJoinScheduledMeeting(meeting.meetingLink)}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                          >
                            <Video className="h-4 w-4" />
                            Join
                          </button>
                          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm">
                            <Eye className="h-4 w-4" />
                            Details
                          </button>
                        </div>
                        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(meeting.status)}`}>
                          {meeting.status.charAt(0).toUpperCase() + meeting.status.slice(1)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Past Meetings */}
              {pastMeetings.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Users className="h-6 w-6 text-gray-600" />
                    Past Interviews
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {pastMeetings.map((meeting) => (
                      <div key={meeting.id} className="bg-gray-50 rounded-lg border border-gray-200 p-6 relative">
                        <h3 className="text-lg font-medium text-gray-800 mb-2">{meeting.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(meeting.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{meeting.interviewer}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                          <MapPin className="h-4 w-4" />
                          <span>{meeting.company}</span>
                        </div>
                        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(meeting.status)}`}>
                          {meeting.status.charAt(0).toUpperCase() + meeting.status.slice(1)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Empty State */}
              {upcomingMeetings.length === 0 && pastMeetings.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200 mx-auto max-w-lg">
                  <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No scheduled interviews</h3>
                  <p className="text-gray-600 mb-6">You do not have any interviews scheduled at the moment.</p>
                  <button
                    onClick={() => setActiveTab('join')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Join an Interview
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
  );
};

export default Homepage;