declare const _default: "\n// Protocol Buffers - Google's data interchange format\n// Copyright 2008 Google Inc.  All rights reserved.\n// https://developers.google.com/protocol-buffers/\n//\n// Redistribution and use in source and binary forms, with or without\n// modification, are permitted provided that the following conditions are\n// met:\n//\n//     * Redistributions of source code must retain the above copyright\n// notice, this list of conditions and the following disclaimer.\n//     * Redistributions in binary form must reproduce the above\n// copyright notice, this list of conditions and the following disclaimer\n// in the documentation and/or other materials provided with the\n// distribution.\n//     * Neither the name of Google Inc. nor the names of its\n// contributors may be used to endorse or promote products derived from\n// this software without specific prior written permission.\n//\n// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n// \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\nsyntax = \"proto3\";\n\npackage google.protobuf;\n\noption csharp_namespace = \"Google.Protobuf.WellKnownTypes\";\noption cc_enable_arenas = true;\noption go_package = \"types\";\noption java_package = \"com.google.protobuf\";\noption java_outer_classname = \"DurationProto\";\noption java_multiple_files = true;\noption objc_class_prefix = \"GPB\";\n\n// A Duration represents a signed, fixed-length span of time represented\n// as a count of seconds and fractions of seconds at nanosecond\n// resolution. It is independent of any calendar and concepts like \"day\"\n// or \"month\". It is related to Timestamp in that the difference between\n// two Timestamp values is a Duration and it can be added or subtracted\n// from a Timestamp. Range is approximately +-10,000 years.\n//\n// # Examples\n//\n// Example 1: Compute Duration from two Timestamps in pseudo code.\n//\n//     Timestamp start = ...;\n//     Timestamp end = ...;\n//     Duration duration = ...;\n//\n//     duration.seconds = end.seconds - start.seconds;\n//     duration.nanos = end.nanos - start.nanos;\n//\n//     if (duration.seconds < 0 && duration.nanos > 0) {\n//       duration.seconds += 1;\n//       duration.nanos -= 1000000000;\n//     } else if (durations.seconds > 0 && duration.nanos < 0) {\n//       duration.seconds -= 1;\n//       duration.nanos += 1000000000;\n//     }\n//\n// Example 2: Compute Timestamp from Timestamp + Duration in pseudo code.\n//\n//     Timestamp start = ...;\n//     Duration duration = ...;\n//     Timestamp end = ...;\n//\n//     end.seconds = start.seconds + duration.seconds;\n//     end.nanos = start.nanos + duration.nanos;\n//\n//     if (end.nanos < 0) {\n//       end.seconds -= 1;\n//       end.nanos += 1000000000;\n//     } else if (end.nanos >= 1000000000) {\n//       end.seconds += 1;\n//       end.nanos -= 1000000000;\n//     }\n//\n// Example 3: Compute Duration from datetime.timedelta in Python.\n//\n//     td = datetime.timedelta(days=3, minutes=10)\n//     duration = Duration()\n//     duration.FromTimedelta(td)\n//\n// # JSON Mapping\n//\n// In JSON format, the Duration type is encoded as a string rather than an\n// object, where the string ends in the suffix \"s\" (indicating seconds) and\n// is preceded by the number of seconds, with nanoseconds expressed as\n// fractional seconds. For example, 3 seconds with 0 nanoseconds should be\n// encoded in JSON format as \"3s\", while 3 seconds and 1 nanosecond should\n// be expressed in JSON format as \"3.000000001s\", and 3 seconds and 1\n// microsecond should be expressed in JSON format as \"3.000001s\".\n//\n//\nmessage Duration {\n  // Signed seconds of the span of time. Must be from -315,576,000,000\n  // to +315,576,000,000 inclusive. Note: these bounds are computed from:\n  // 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years\n  int64 seconds = 1;\n\n  // Signed fractions of a second at nanosecond resolution of the span\n  // of time. Durations less than one second are represented with a 0\n  // `seconds` field and a positive or negative `nanos` field. For durations\n  // of one second or more, a non-zero value for the `nanos` field must be\n  // of the same sign as the `seconds` field. Must be from -999,999,999\n  // to +999,999,999 inclusive.\n  int32 nanos = 2;\n}\n";
export default _default;
